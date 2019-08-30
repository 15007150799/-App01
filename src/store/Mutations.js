
const state={
    home:true,
}

const motations={
    HomeShow(state){
        state.home=true;
    },
    HomeHide(state){
        state.home=false;
    }
}


export default{
  state,
  motations

}