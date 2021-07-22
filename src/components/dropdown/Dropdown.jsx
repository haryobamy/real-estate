import React from 'react'
import { MenuData } from '../../data/MenuData'
import { Button } from '../Button'
import { BtnWrapper, CloseIcon, DropdownContainer, DropdownLink, DropdownWrapper, DropdpwnMenu, Icon } from './DropdownElement'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <>
            <DropdownContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon onClick={toggle} />
                </Icon>
                <DropdownWrapper>
                    <DropdpwnMenu >
                        {MenuData.map((item, index) => (
                            <DropdownLink to={item.link} key={index}>
                                {item.title}
                            </DropdownLink>

                        ))}
                    </DropdpwnMenu>
                    <BtnWrapper>
                        <Button to='/contact' primary={true} round={true} big={true}>
                            Contact Us
                        </Button>
                    </BtnWrapper>

                </DropdownWrapper>


            </DropdownContainer>

        </>
    )
}

export default Dropdown
