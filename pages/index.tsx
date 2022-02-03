import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

const Logo = styled.div`
  width: 100%;
  height: 200px;
  display: block;
  position: relative;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;
  background: url('./img/LOGO.png') center / cover no-repeat;
`
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`
const PaymentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`
const MTS = styled.a`
  width: 250px;
  height: 250px;
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  margin: auto;
  margin-top: 20px;  
  background: url('./img/MTS.jpg')center / cover no-repeat;
`
const Beeline = styled(MTS)`
  background: url('./img/beeline.jpg')center / cover no-repeat;
`
const Megafon = styled(MTS)`
  background: url('./img/megafon.jpg')center / cover no-repeat;
`
const Other = styled(MTS)`
  background: url('./img/other.jpg')center / cover no-repeat;
`
const Nametag = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 25px;
  text-transform: uppercase;
  text-align: center;
  padding: 10px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #333;
  background: #E0E0E0;
  border-radius: 0px 0px 15px 15px;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marvait Mobile</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Logo></Logo>
      <Wrapper>
        <div className="container">
          <PaymentWrapper>
            <MTS>
              <Nametag>мтс</Nametag>
            </MTS>
            <Beeline>
              <Nametag>мегафон</Nametag>
            </Beeline>
            <Megafon>
              <Nametag>билайн</Nametag>
            </Megafon>
            <Other>
              <Nametag>другой оператор</Nametag>
            </Other>
          </PaymentWrapper>
        </div>
      </Wrapper>
    </div>
  )
}

