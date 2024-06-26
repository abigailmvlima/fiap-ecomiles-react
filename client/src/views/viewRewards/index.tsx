import svg from 'assets/svg';
import { EActiveView } from 'domains/enums/EActiveView';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const rewards = [
  {
    title:
      'AMAZON ECHO DOT 3RD GEN ASSISTENTE VIRTUAL ALEXA COLOR CARBÓN 110V/240V',
    miles: '19.906 milhas',
    image: require('../../assets/png/echo_dot.png'),
  },
  {
    title: 'Kindle 11ª Geração Amazon 6” 16GB 300 ppi Wi-Fi',
    miles: '29.507 milhas',
    image: require('../../assets/png/kindle.png'),
  },
  {
    title: 'Xicaras Coloridas 210Ml p/ Café Leite e Chá 4 und c/ Suporte',
    miles: '12.000 milhas',
    image: require('../../assets/png/xicaras.png'),
  },
  {
    title: 'LEGO Classic Diversão Neon Criativa 333 Peças',
    miles: '16.900 milhas',
    image: require('../../assets/png/lego.png'),
  },
];

const ViewRewards = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <S.ButomLogo>
          <S.Logo
            src={require('../../assets/png/iconEcoMiles.png')}
            alt="Ecomiles Logo"
          />
          <S.ButomBase
            onClick={() => {
              navigate(`/${EActiveView.home}`);
            }}
          >
            <S.ButomImage>
              <svg.Back />
            </S.ButomImage>
            <S.ButomDescription>Voltar</S.ButomDescription>
          </S.ButomBase>
        </S.ButomLogo>
        <S.Profile>
          <S.Greeting>Olá, Abigail</S.Greeting>
          <S.Miles>58.407 milhas</S.Miles>
          <S.Logout
            onClick={() => {
              navigate(`/${EActiveView.login}`);
            }}
          >
            sair
          </S.Logout>
        </S.Profile>
      </S.Header>
      <S.Title>Recompensas</S.Title>
      <S.RewardsList>
        {rewards.map((reward, index) => (
          <S.RewardItem key={index}>
            <S.RewardImage src={reward.image} alt={reward.title} />
            <S.RewardDetails>
              <S.RewardTitle>{reward.title}</S.RewardTitle>
              <S.RewardMiles>{reward.miles}</S.RewardMiles>
            </S.RewardDetails>
            <S.RewardButton>
              <svg.Cart />
            </S.RewardButton>
          </S.RewardItem>
        ))}
      </S.RewardsList>
    </S.Container>
  );
};

export default ViewRewards;
