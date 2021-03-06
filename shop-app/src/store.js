import Vue from 'vue';
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		username:'',
		isLogin:false,
		address:[
			{
				name:'小月亮',
				phone:123456789,
				city:'三亚',
				detailAdd:'三亚荣誉酒店三楼234号'
			},
			{
				name:'小月亮',
				phone:123456789,
				city:'三亚',
				detailAdd:'三亚荣誉酒店三楼234号'
			},
			{
				name:'小月亮',
				phone:123456789,
				city:'三亚',
				detailAdd:'三亚荣誉酒店三楼234号'
			}
		],
		cartGoods:[],//添加到购物车中的商品
		cartCounter:0,//购物车物品总数
		GoodsCurrentSelKind:0,//表示显示全部分类

	},
	mutations:{
		addGoodsToCart(state,item){
			item.isInCart = true;
			item.count++;
			state.cartGoods.push(item);
			state.cartCounter++;
		},
		deleteGoodsFromCart(state,itemId){
			state.cartCounter--;
			state.cartGoods.some((val,index,Goods)=>{
				if(val.id === itemId){
					val.isInCart = false;
					val.count--;
					Goods.splice(index,1);
					return true;
				}
			})

		},
		addGoods(state,itemId){
			state.cartCounter++;
			state.cartGoods.some(val=>{
				if(val.id === itemId){
					val.count++
					return true;
				}
			})
		},
		reduceGoods(state,itemId){
			state.cartCounter--;
			state.cartGoods.some(val=>{
				if(val.id===itemId){
					val.count--;
					return true;
				}
			})
		},
		login(state,username){
			state.username = username;
			state.isLogin = true;
		},
		logout(state){
			state.isLogin = false;
		},
		changeCurrentSelKind(state,kind){
			state.GoodsCurrentSelKind = kind;
		},
		addNewAddress(state,newAdd){
			state.address.push(newAdd);
		},
		modifyAddress(state,item){
			state.address[item.index] = item.value;
		},
		deleteAddress(state,index){
			state.address.splice(index,1);
		}
	}
})

