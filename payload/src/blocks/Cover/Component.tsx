import React from 'react'

type Props = {
  className?: string
  blockType: 'cover'
}

export const CoverBlock: React.FC<Props> = ({ className }) => {
  return (
    <div className="test">
      <p>cover</p>
    </div>
  )
}
