import './App.css';
import { Container, Divider, Grid, Image, Icon, Header, Segment, Embed, Label } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div>
        {/* <Container textAlign='center'> <h1>ColibriDoc</h1></Container> */}
        <Container textAlign='center'> <h1>Robotic Navigation for Subretinal Injection via <br></br> Intelligent Real-Time Virtual iOCT Volume Slicing</h1></Container>
        <Container textAlign='center'> <h5>Shervin Dehghani, Michael Sommersperger, Peiyao Zhang <br></br> Alejandro Martin-Gomez, Benjamin Busam, Peter Gehlbach, Nassir Navab, M Ali Nasseri, Iulian Iordachita</h5>

          <Label color='blue' as='a' href="mailto:shervin.dehghani[at]tum.de">
            <Icon name='mail' /> shervin.dehghani@tum.de
          </Label>
          <Label color='red' as='a' href="https://arxiv.org/pdf/2301.07204.pdf">
            <Icon name='copy' /> Paper
          </Label>
          {/* <Label as='a' href="">
            <Icon name='github' /> Code
          </Label> */}
        </Container>
        <Container className='Images' textAlign='justified'>
          <Grid columns={6} centered> 
            <Grid.Row centered>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/shervin.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/michi.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/peiyao.png'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/ale.png'} alt=""/>
            </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={6} centered>
            <Grid.Row centered>
            <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/beni.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/gehlbach.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/navab.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/nasseri.jpeg'} alt=""/>
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src={process.env.PUBLIC_URL + '/images/authors/iordachita.jpeg'} alt=""/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>

        <Container className='Images' textAlign='justified'>

        <Divider horizontal>
            <Header as='h4'>
              <Icon name='search' />
              Abstract
            </Header>
          </Divider>

          In the last decade, various robotic platforms have been introduced that could support delicate retinal surgeries. Concurrently, to provide semantic understanding of the surgical area, recent advances have enabled microscope-integrated intraoperative Optical Coherent Tomography (iOCT) with high-resolution 3D imaging at near video rate. The combination of robotics and semantic understanding enables task autonomy in robotic retinal surgery, such as for subretinal injection. This procedure requires precise needle insertion for best treatment outcomes. However, merging robotic systems with iOCT introduces new challenges. These include, but are not limited to high demands on data processing rates and dynamic registration of these systems during the procedure. In this work, we propose a framework for autonomous robotic navigation for subretinal injection, based on intelligent real-time processing of iOCT volumes. Our method consists of an instrument pose estimation method, an online registration between the robotic and the iOCT system, and trajectory planning tailored for navigation to an injection target. We also introduce intelligent virtual B-scans, a volume slicing approach for rapid instrument pose estimation, which is enabled by Convolutional Neural Networks (CNNs). Our experiments on ex-vivo porcine eyes demonstrate the precision and repeatability of the method. Finally, we discuss identified challenges in this work and suggest potential solutions to further the development of such systems.

          <Divider horizontal>
            <Header as='h4'>
              <Icon name='video' />
              Videos
            </Header>
          </Divider>
        </Container>

        <Container textAlign='center'>
          <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Header as='h4'>Demo</Header>
                <Embed
                  id='5IBjiwelM6E'
                  source='youtube'
                />
              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Header as='h4'>Presentation</Header>
                <Embed
                  id='5IBjiwelM6E'
                  source='youtube' />
              </Grid.Column>
            </Grid>
          </Segment>


          <Grid>
            <Grid.Row columns={5} verticalAlign='middle'>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/tum.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/camp.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/maps.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/mri.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
              <Grid.Column>
                <img src={process.env.PUBLIC_URL +'/images/sponsors/jhu.jpeg'} className='sponsors' alt=""/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

      </div>
    </div>
  );
}

export default App;
