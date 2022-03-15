import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Header = () => {
  return (
    <Container>
            <HeaderLogo>
                
                    <img src={"https://pngimg.com/uploads/amazon/amazon_PNG11.png"} />
            
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select Your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>

                <HeaderSearchInput type='text' />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
                
            </HeaderSearch>
            <HeaderNavItems>

                <HeaderOption>
                      <OptionLineOne>Hello, Aindrail</OptionLineOne>
                      <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Return</OptionLineOne>
                     <OptionLineTwo>/Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <CartCount>
                        5
                    </CartCount>
                    
                    <ShoppingCartIcon/>  
                    
                    
                </HeaderOptionCart>
                

            </HeaderNavItems>
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
padding-left: 9px;
display: flex;
align-items: center;
`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
 font-weight : 700;
`
const HeaderSearch = styled.div`
display: flex;
flex-grow: 0.8;
height: 40px;
border-radius: 5px; 
overflow: hidden;
margin-left: 4px;
background-color: white;

:focus-within {

    box-shadow: 0 0 0 3px #F90;

}

`
const HeaderSearchInput = styled.input`
flex-grow: 1;
border: 0;
:focus {
    outline: none;
} 
//on hover outline ko hatane ke lea


`
const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width: 45px;
color: black;
display: flex;
justify-content: center;
align-items: center;
`
const HeaderNavItems = styled.div`
 display: flex;

`

const HeaderOption = styled.div`
padding: 10px 9px 10px 9px;
`

const HeaderOptionCart = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding-right: 9px;
`


const CartCount = styled.div`
padding-left: 4px;
`

