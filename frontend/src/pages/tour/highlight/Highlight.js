import React from 'react'
import SubHeadings from '../../../components/layouts/subheadings/SubHeadings'
import DropdownBox from '../../../components/layouts/DropdownBox'
import DropdownItem from '../../../components/layouts/DropdownItem'
import {BiCircle} from 'react-icons/bi'
import "./highlight.css"

const Highlight = () => {

  return (
    <div className='highlight_part'>
        <SubHeadings title="highlights"/>
        <DropdownBox className='highlight_box'>
            <li><BiCircle className='icon'/>Visit the Museum of Modern Art in Manhattan</li>
            <li><BiCircle className='icon'/>See amazing works of contemporary art, including Vincent van Gogh's The Starry Night</li>
            <li><BiCircle className='icon'/>Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse</li>
            <li><BiCircle className='icon'/>Behold masterpieces by Gauguin, Dali, Picasso, and Pollock</li>
            <li><BiCircle className='icon'/>Enjoy free audio guides available in English, French, German, Italian, Spanish, Portuguese</li>
        </DropdownBox>
    </div>
  )
}

export default Highlight