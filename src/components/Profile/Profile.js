import React from 'react';
import { Card, message, Image, Rate, Button } from 'antd';
import { connect } from 'react-redux';
import { MeActions } from '../../redux/actions';
import { MeSelectors } from '../../redux/reducers';
import './Profile.css'
class Profile extends React.Component {
  componentDidMount() {
    this.loadMe();
  }

  async loadMe() {
    const { getMeGithub } = this.props;
    try {
      await getMeGithub();
    } catch (err) {
      message.error('Ocorreu um erro', err)
    }
  }

  render() {
    const { meGithub } = this.props;
    const { Meta } = Card;
    return (
      <>
        <div className="container">
          <Card
            hoverable
            style={{ width: '20%', height: '40%' }}
            cover={<Image alt="me" src={meGithub && meGithub.data && meGithub.data.avatar_url} />}
            onClick
          >
            <Meta title={meGithub && meGithub.data && meGithub.data.name} description={meGithub && meGithub.data && meGithub.data.bio} />
            <div className="container-start">
              <Rate defaultValue={5} />
            </div>
            <div className="card-repo">
              Repositórios:  {meGithub && meGithub.data && meGithub.data.public_repos}
            </div>
          </Card>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  meGithub: MeSelectors.getMeGithub(state),
});

const mapDispatchToProps = (dispatch) => ({
  getMeGithub: (callback) => dispatch(MeActions.getMe(callback)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);