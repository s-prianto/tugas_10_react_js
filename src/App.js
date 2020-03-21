import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import {Grid, Flag, Icon, Form, Input, Header, Image, Divider, Container, Label, Button} from "semantic-ui-react";

const style = {
  header:{
    paddingTop:'2em',
  },
  header1:{
    margin:'0 1em 0 1em',
  },

}

class App extends Component{

  render(){
    return(
      <div>
        <Grid container columns={3} style={style.header}>
          <Grid.Column width={4} textAlign="right" >
            <Flag name="id" style={style.header1}/>
            <Icon name="angle left" size="large" style={style.header1}/>
            <Icon name="angle right" size="large" style={style.header1}/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Form>
              <Form.Field>
              <Input type="text" placeholder="Search..." icon={<Icon disabled name="star"/>}/>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column width={4}>
            <Header as="h3">
              <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" circular/>
              Patrick
            </Header>
          </Grid.Column>
        </Grid>
        <Divider horizontal><h5>SELAMAT DATANG!!!</h5></Divider>
        <Grid container column={2}>
          <Grid.Column width={11}>
          </Grid.Column>
          <Grid.Column width={5} textAlign="center">
            <Label color='teal' tag>
              SPORT
            </Label>
          </Grid.Column>
        </Grid>
        <br/><br/>
        <Container textAlign="center">
          <p>
            Ducati tengah menunggu sidang Pengadilan FIM tentang komponen aerodinamis. Andai gugatan pararivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga?)Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez. Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan. Pada awalnya, protes keempat tim itu ditolak oleh steward MotoGP sehingga dibawa ke Pengadilan Banding FIM. Sidang itu sendiri akan dilakukan sebelum seri kedua di Argentina digelar pada 29-31 Maret mendatang.Manajer umum Ducati Gigi Dall'Igna berkukuh tidak ada yang ilegal dengan komponen itu. Namun, seandainya pengadilan mengabulkan gugatan tersebut Ducati akan mempertimbangkan melanjutkan kasus ini ke CAS. "Di dalam federasi, derajatnya berakhir di Pengadilan Banding FIM. Anda harus pergi ke CAS, yang adalah pengadilan olahraga tapi di dalam kasus ini Anda keluar dari perimeter FIM," Dall'Igna mengungkapkan kepada MotoGP.com. "Saya bahkan tidak ingin memikirkan sampai titik ini. Kami sangat yakin bahwa kami tidak melanggar regulasi kok, dan yakin kami tidak melihat adanya alasan mengapa pengadilan banding bisa memutuskan secara berbeda."
          </p>
          <br/>
          <Button icon color="teal" labelPosition="left">
            <Icon name="plus"/>
            <p>Tambah Tautan Ke List</p>
          </Button>
        </Container>

      </div>
    )
  }
}

export default App;
