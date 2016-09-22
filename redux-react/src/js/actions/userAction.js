export function fetchUser(){
	return{
		type:"FETCH_USER_FULFILLED",
		payload:{
			name:"Julian",
			age:22
		}
	}
}

export function setName(name){
	return{
		type:"SET_USER_NAME",
		payload:name
	}
}

export function setAge(age){
	return{
		type:"SET_USER_AGE",
		payload:age
	}
}