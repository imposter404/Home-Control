import { StyleSheet} from "react-native";
export const styles = StyleSheet.create({
  home :{
    height:'100dvh',
    backgroundColor:'#313131ff',
    display:"flex",
    flexDirection:'column'
  },
  grid:{
    display:'flex',
    justifyContent:'space-between',
    alignContent:'center',
    flexDirection:'row'
  },
  right:{
    textAlign:'right'
  },
  center:{
    display:'flex',
    alignItems:'center'
  },
  middle:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  baseline:{
    display:'flex',
    alignItems:'baseline'
  }
});


export const root = StyleSheet.create({
  heading1 :{
    fontSize:"24px",
    fontWeight:'600'
  },
  heading2 :{
    fontWeight:'400',
    fontSize:"18px",
  },
  heading3 :{
    fontSize:"12px",
    fontWeight:'400',
  },
  text_white:{
    color:'#fff',
  },
  text_black:{
    color:'#000000ff',
  }
});

export const colors = {
  primary :'#1D63FF',
  secondary:'#99b9ff',
  accent:'#d5e2ff',
  bg_black:"#000",
  bg_white:'#fff',
  bg_white_80:'#ccc',


  text_white:'#fff',
  text_black:'#000000ff',
};
