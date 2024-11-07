// import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { CoverBlock } from '@/blocks/Cover/Component'

const blockComponents: { [key in Page['layout'][0]['blockType']]: React.FC<Page['layout'][0]> } = {
  cover: CoverBlock
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
