import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background-color: #fff;
  min-height: 100vh;
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Greeting = styled.div`
  font-size: 13px;
  color: #54585c;
  letter-spacing: 1px;
`;

export const Miles = styled.div`
  font-size: 11px;
  color: #86898d;
  letter-spacing: 1px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const Logout = styled.a`
  font-size: 12px;
  color: #0066cc;
  text-decoration: none;
`;

export const Title = styled.h1`
  margin: 20px 0;
  font-size: 24px;
  letter-spacing: 2px;
`;

export const ChallengeList = styled.div`
  width: 100%;
  flex-direction: column;
`;

export const ChallengeItem = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e0e0e0;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
`;

export const ChallengeDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChallengeTitle = styled.div`
  font-size: 18px;
  margin-bottom: 1px;
  letter-spacing: 1px;
`;

export const ChallengeLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-size: 14px;
`;

export const ChallengeActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ChallengeEnd = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const RegisterButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

export const ButomLogo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButomBase = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e0f1eb;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #e7f3ef;
  }

  &:active {
    background-color: #aebeb9;
  }
`;

export const ButomImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const ButomDescription = styled.div``;
