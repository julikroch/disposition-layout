import * as React from 'react'
import { ReactChild, ReactElement, ReactNode } from 'react'
import { NoSSR } from 'vtex.render-runtime'

type Disposition = {
  order: number
  show: boolean
}

interface Props {
  children: ReactNode
  disposition: Disposition[]
  ssr?: boolean
}

const DispositionLayout: any = ({
  children,
  disposition,
}: Props): ReactChild[] | ReactNode => {
  const array = React.Children.toArray(children) as ReactChild[]

  const nestedChildren =
    array.length === 1 ? (array[0] as ReactElement).props.children : null

  const sortedChildren = disposition?.reduce((acc, item, i) => {
    const { order, show } = item

    if (!show) {
      return acc
    }

    acc.splice(order - 1, 0, nestedChildren ? nestedChildren[i] : array[i])

    return acc
  }, [] as ReactChild[])

  if (sortedChildren.length <= 0) {
    return children
  }

  if (nestedChildren) {
    return [
      {
        ...(array[0] as ReactElement),
        props: { children: sortedChildren },
      },
    ]
  }

  return sortedChildren
}

const Wrapper = (props: Props) => {
  if (props?.ssr ?? true) {
    return <DispositionLayout {...props} />
  }

  return (
    <NoSSR>
      <DispositionLayout {...props} />
    </NoSSR>
  )
}

Wrapper.schema = {
  title: 'admin/editor.dispositionlayout.title',
  description: 'admin/editor.dispositionlayout.description',
  type: 'object',
}

export default Wrapper
