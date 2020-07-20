import styled from 'styled-components';

export const BackTop = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right :10px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    border-radius: 4px 0 0 4px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
  display: block;
  float: right;
  width: 150px;
  height: 100px;
  border-radius: 3px;
  }
`;

export const ListInfo = styled.div`
  width: 475px;
  float: left;
  .title {
  font-size: 18px;
  line-height: 1.5;
  font-weight: bold;
  color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background:#a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  margin-bottom: 6px;
  background:url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 280px;
  height: 200px;
  
  //background:#ccc;
`;

export const WriterTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #969696;
`;

export const WriterSwitch = styled.div`
  float: right;
  border: none;
  outline: none;
  padding: 0;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    opacity: .7;
  }
`;

export const WriterItem = styled.div`
  .avatar {
    display: inline-block;
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    background:#ccc;
    border-radius: 50%;
  }
  .name {
    display: inline-block;
  } 
`;
