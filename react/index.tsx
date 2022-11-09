import * as React from 'react'
import { ReactChild, ReactNode } from 'react'
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
  const array = React.Children.toArray(children) as any

  const nestedChildren = array.length === 1 ? array[0].props.children : null

  const sortedChildren = disposition
    ?.filter(({ order, show }) => order && show)
    .map(({ order }) => {
      if (nestedChildren) {
        return nestedChildren[order - 1]
      }

      return array[order - 1]
    })

  if (nestedChildren) {
    return [
      {
        ...array[0],
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
