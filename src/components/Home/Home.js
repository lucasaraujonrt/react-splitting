import React from 'react';
import { connect } from 'react-redux';
import { HomeActions } from '../../redux/actions';
import { HomeSelectors } from '../../redux/reducers'
import { Row, Col, Input, Button, message } from 'antd';
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
  }

  async onSubmit(e) {
    e.preventDefault();
    const { saveData } = this.props;
    const { name, email } = this.state;
    const data = {
      name,
      email,
    }
    await saveData(data);
    message.success('Dados enviados com sucesso');
  }


  onChangeEmail = (e) => {
    this.setState({ email: e.target.value })
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name, email } = this.state;
    const { data } = this.props;
    return (
      <>
        <div className="container">
          <h1 className="title">Olá sou o <strong>Lucas Araujo</strong> e criei essa página para aplicar conceitos de <strong>React.Suspense</strong> e <strong>Redux</strong></h1>
          <div className="container-form">
            <h3 className="container-form-title">Todos os dados inseridos nesse form serão armazenado na Store do redux, onde pode ser mostrada em toda aplicação.</h3>
            <form className="form" onSubmit={(e) => this.onSubmit(e)}>
              <Row gutter={16} className="form-row">
                <Col span={8}>
                  <label>Seu nome</label>
                  <Input
                    value={name}
                    onChange={this.onChangeName}
                    type="text"
                    placeholder="Seu nome aqui"
                  />
                </Col>
                <Col span={8}>
                  <label>E-mail</label>
                  <Input
                    value={email}
                    onChange={this.onChangeEmail}
                    type="text"
                    placeholder="Seu email aqui"
                  />
                </Col>
              </Row>
              <Row className="form-row">
                <Button type="primary" htmlType="submit" size="large" shape="round">
                  Enviar
                </Button>
              </Row>
            </form>
            <div>
              <label>Email:
                <strong>
                  {data && data.email}
                </strong>
                &nbsp;
              </label>
              <label>Nome:  <strong>
                {data && data.name}
              </strong>
              </label>
            </div>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  data: HomeSelectors.getHomeData(state),
})

const mapDispatchToProps = (dispatch) => ({
  saveData: (payload) => dispatch(HomeActions.saveInputText(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);