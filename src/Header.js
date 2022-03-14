import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  return (
    <Container>
            <HeaderLogo>
                
                    <img src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"} />
            
            </HeaderLogo>
            <HeaderOptionAddress>
                {/* <LocationOnIcon /> */}
                {/* <HeaderOption> */}
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                {/* </HeaderOption> */}
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type='text' />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
    </Container>
  )
}

export default Header
const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
`

const HeaderLogo = styled.div`
    img {
        width: 100px;
        margin-left: 11px;
    }
`
const HeaderOptionAddress = styled.div`

`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`

`
const HeaderSearch = styled.div`

`
const HeaderSearchInput = styled.input`

`
const HeaderSearchIconContainer = styled.div`

`
