(this["webpackJsonpusdt-forsage"]=this["webpackJsonpusdt-forsage"]||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(16),l=a.n(i),r=a(2),o=a(3),c=a(5),p=a(4),d=a(1),m=a(6),u=a(7),y=a.n(u);var h=[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint8",name:"_decimals",type:"uint8"},{internalType:"uint256",name:"initialSupply",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"BurnLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_blackListedUser",type:"address"},{indexed:!1,internalType:"uint256",name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"old_limit",type:"uint256"},{indexed:!1,internalType:"uint256",name:"new_limit",type:"uint256"}],name:"IssueLimit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_evilUser",type:"address"},{internalType:"string",name:"_reason",type:"string"}],name:"addBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"blacklistReason",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cancelOwnershipTransfer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"increaseIssueLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"isBlackListed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"issue",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nextOwner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipTransferDeadline",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"reciveOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"redeem",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"reduceBurnLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];var b=[{inputs:[{internalType:"address",name:"_tokenUSDT",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"matrix",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"MissedEthReceive",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint256",name:"matrix",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"},{indexed:!1,internalType:"uint256",name:"place",type:"uint256"}],name:"NewUserPlace",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!0,internalType:"uint256",name:"userId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"referrerId",type:"uint256"}],name:"Registration",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"currentReferrer",type:"address"},{indexed:!0,internalType:"address",name:"caller",type:"address"},{indexed:!1,internalType:"uint256",name:"matrix",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"Reinvest",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"matrix",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"SentExtraEthDividends",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!0,internalType:"address",name:"referrer",type:"address"},{indexed:!1,internalType:"uint256",name:"matrix",type:"uint256"},{indexed:!1,internalType:"uint256",name:"level",type:"uint256"}],name:"Upgrade",type:"event"},{constant:!1,inputs:[{internalType:"uint256",name:"_level",type:"uint256"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"ChangeLevelPrice",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenOTRO",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"_tokenTRC20",type:"address"}],name:"ChangeTokenUSDT",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"LAST_LEVEL",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"level",type:"uint256"}],name:"buyNewLevel",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"currentStartingLevel",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint256",name:"level",type:"uint256"}],name:"findFreeX3Referrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"idToAddress",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isUserExists",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"lastUserId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"levelPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"missPayments",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address payable",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"profits",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrerAddress",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"registrationExt",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"tokenOTRO",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"tokenUSDT",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"users",outputs:[{internalType:"uint256",name:"id",type:"uint256"},{internalType:"address",name:"referrer",type:"address"},{internalType:"uint256",name:"partnersCount",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint256",name:"level",type:"uint256"}],name:"usersActiveX3Levels",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"uint256",name:"level",type:"uint256"}],name:"usersX3Matrix",outputs:[{internalType:"address",name:"",type:"address"},{internalType:"address[]",name:"",type:"address[]"},{internalType:"bool",name:"",type:"bool"},{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"withdrawLostOTROFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostTRXFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"withdrawLostUSDTFromBalance",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];var f={contract:"0xC76BeEf9Af888208820d7E7e84C3ec4B73a7e3A9",rpc:"https://polygon-bor-rpc.publicnode.com",chainID:137};const w=new(a(17).a)(null,{path:"/"});var E=a(37);const g=f.rpc;let v=new y.a(g),T=!1;const x=f.contract,k="0x0000000000000000000000000000000000000000";let N=!1;var S="1000000";var M=function(e){function t(e){var a,n,i,l;return Object(r.a)(this,t),n=this,i=t,l=[e],i=Object(d.a)(i),(a=Object(c.a)(n,Object(p.a)()?Reflect.construct(i,l||[],Object(d.a)(n).constructor):i.apply(n,l))).state={decimals:6,owner:k,addressToken:k,walletView:k,sponsor:k,aprovedUSDT:new E(0),balanceUSDT:new E(0),balanceLost:new E(0),levelPrice:new E(0),ganado:new E(0),idSponsor:new E(0),admin:!1,tokenName:"",id:new E(0),wallet:k,level:0,team:0,personas:0,texto:"CONNECT WALLET",link:"Loading...",canastas:[],levelsPrice:[],image:s.a.createElement(s.a.Fragment,null),metamask:{conectando:!1,installed:!1,logged:!1,viewer:!1},contract:{wallet:null,ready:!1,web3:null,token:null,principal:null},intervalo:null,LAST_LEVEL:15,gasPrice:44522276539n},a.conectar=a.conectar.bind(a),a.setContract=a.setContract.bind(a),a.estado=a.estado.bind(a),a.withdraw=a.withdraw.bind(a),a.deposit=a.deposit.bind(a),a.getSponsor=a.getSponsor.bind(a),a.changeToken=a.changeToken.bind(a),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:async function(){var e=this;/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)&&(N=!0),setTimeout((function(){e.estado()}),3e3);let t=setInterval((function(){e.estado()}),3e4);this.setState({intervalo:t})}},{key:"componentWillUnmount",value:async function(){clearInterval(this.state.intervalo)}},{key:"conectar",value:async function(){let{wallet:e,metamask:t}=this.state;if("undefined"!==typeof window.ethereum){if(t.installed=!0,!this.state.metamask.conectando){t.conectando=!0,this.setState({metamask:t});try{e=await window.ethereum.request({method:"eth_requestAccounts"}).then((async function(e){return t.logged=!0,e[0]}))}catch(a){t.logged=!1,alert(a.message),e=k}v=new y.a(window.ethereum),t.conectando=!1,this.setState({metamask:t})}}else t.viewer=!0,t.installed=!1,t.logged=!1;return this.setState({wallet:e,metamask:t}),t.logged}},{key:"setContract",value:async function(){let{wallet:e,contract:t,walletView:a}=this.state,n=e,s=await v.eth.getGasPrice().catch((function(e){return console.log(e),10000000n}));t.principal=new v.eth.Contract(b,x,{from:n});let i=await t.principal.methods.owner().call({from:n}),l=await t.principal.methods.tokenUSDT().call({from:n});t.token=new v.eth.Contract(h,l,{from:n});let r=await t.token.methods.decimals().call({from:n});r=parseInt(r);let o=await t.token.methods.symbol().call({from:n});if(T=!0,t.ready=!0,this.props.isView){let e=document.location.href;if(e.indexOf("&wallet=")>0){e=e.split("&wallet=")[1],e=e.split("&")[0],e=e.split("#")[0],e=e.toLowerCase();try{a=v.utils.toChecksumAddress(e)}catch(c){a=await t.principal.methods.idToAddress(parseInt(e)).call({from:n})}finally{await t.principal.methods.isUserExists(a).call({from:n})||(alert("User is not exists."),a=k)}}n=a,a===k&&(a=await t.principal.methods.owner().call({from:n}))}this.setState({contract:t,addressToken:l,decimals:r,tokenName:o,owner:i,walletView:a,gasPrice:s})}},{key:"estado",value:async function(){var e=this;T||(await this.conectar(),await this.setContract());let{wallet:t,walletView:a,owner:n,decimals:i,contract:l,link:r,tokenName:o,metamask:c,level:p,LAST_LEVEL:d}=this.state;if(!l.ready&&(!c.installed&&!c.logged||c.viewer))return;this.getSponsor(),this.setState({isOwner:n.toLowerCase()===t.toLowerCase()&&t.toLowerCase()!==k});let m=t;this.props.isView&&(t=a),p=0;let u=[];d=parseInt(await l.principal.methods.LAST_LEVEL().call({from:m})),this.setState({LAST_LEVEL:d});for(var y=1;y<=d&&await l.principal.methods.usersActiveX3Levels(t,y).call({from:m});y++)p++;this.setState({level:p});let h=await l.principal.methods.levelPrice(p+1).call({from:m});h=new E(parseInt(h)),this.setState({levelPrice:h});let b=await l.principal.methods.missPayments(t).call({from:m});b=new E(parseInt(b)),this.setState({balanceLost:b});let f=await l.principal.methods.profits(t).call({from:m});f=new E(parseInt(f)),this.setState({ganado:f});let w=await l.token.methods.balanceOf(t).call({from:m});w=new E(parseInt(w)).shiftedBy(-i),this.setState({balanceUSDT:w});let g=await l.token.methods.allowance(t,x).call({from:m});g=new E(parseInt(g)).shiftedBy(-i),this.setState({aprovedUSDT:g});let N=await v.eth.getGasPrice().catch((function(e){return console.log(e),10000000n}));this.setState({gasPrice:N});let S="Buy | "+h.toString(10)+o;if(0===p&&(S="Register | "+h.toString(10)+o),p===d&&(S="Max Level Reached"),0===g.toNumber()&&(S="Token Approval"),c.logged||(S="CONNECT WALLET"),this.setState({texto:S}),await l.principal.methods.isUserExists(t).call({from:m})){let e=await l.principal.methods.users(t).call({from:m});this.setState({team:parseInt(e.partnersCount)}),r=document.location.origin+"?backoffice&ref="+parseInt(e.id),this.setState({id:parseInt(e.id),link:r})}else this.setState({id:"N/A",link:"Make an investment to get the referral LINK"});let{canastas:M}=this.state,L=0,C=0,_=[];for(_[1]=20,y=2;y<=d;y++)_[y]=2*_[y-1];for(this.setState({levelsPrice:_}),y=1;y<=d;y++){let a,n,i,r="",c=0;if(y<=p){L+=_[y];let e=await l.principal.methods.usersX3Matrix(t,y).call({from:m});c=parseInt(e[3]),e[1].length>0&&(u=[...u,...e[1]],u=[...new Set(u)]),i=e[1].length+3*c,C+=i;let p=i/3,d=2*parseInt(p);p=(""+p).split("."),p.length>1?(p=p[1],p=p.indexOf("3")>=0?1:2):p=0,d=parseInt(d)+parseInt(p);let h=e[1].length+3*c%3;if(i>0)switch(h){case 1:a="#009030",n="white",r="white";break;case 2:a="#009030",n="#009030",r="white";break;case 0:a="#009030",n="#009030",r="#009030";break;default:a="white",n="white",r="white"}M[y-1]=s.a.createElement("div",{className:"item",key:"level"+y},s.a.createElement("h3",{style:{color:"white",margin:"2px",padding:"2px"}},y),s.a.createElement("span",{style:{color:"white"}},_[y].toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",o),s.a.createElement("br",null),s.a.createElement("span",{className:"badge-left badge",style:{color:a}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge",style:{color:n}},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge",style:{color:r}},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success",style:{color:"black",width:"80%",backgroundColor:"gray",cursor:"not-allowed",fontWeight:"bold",borderRadius:"5px",borderStyle:"none"}}," Buyed"),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users",style:{color:i>0?"#009030":""}})," ",i," ","  |  ",s.a.createElement("i",{className:"fa fa-refresh",style:{color:c>0?"#009030":""}})," ",c)}else M[y-1]=s.a.createElement("div",{className:"item",key:"level-"+y},s.a.createElement("h3",{style:{color:"white",margin:"2px",padding:"2px"}},y," "),s.a.createElement("span",{style:{color:"white"}},_[y].toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",o),s.a.createElement("br",null),s.a.createElement("span",{className:"badge-left badge"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-center badge"},s.a.createElement("i",{className:"fa fa-users"})),"  ",s.a.createElement("span",{className:"badge-right badge"},s.a.createElement("i",{className:"fa fa-users"})),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn",onClick:function(){e.deposit()},style:{color:"white",width:"80%",backgroundColor:"#009030",borderRadius:"5px",fontWeight:"bold",borderStyle:"none"}}," ",s.a.createElement("b",null,"Buy Level")),s.a.createElement("br",null),s.a.createElement("i",{className:"fa fa-users"})," 0 ","  |  ",s.a.createElement("i",{className:"fa fa-refresh"})," 0");this.setState({canastas:M})}this.setState({invertido:L,personas:C});let O=s.a.createElement(s.a.Fragment,null),A="";f.toNumber()>=2e3&&p>=4&&(A="1"),f.toNumber()>=1e4&&p>=6&&(A="2"),f.toNumber()>=1e5&&p>=9&&(A="3"),f.toNumber()>=1e6&&p>=13&&(A="4"),f.toNumber()>=1e7&&p>=14&&(A="5"),f.toNumber()>=5e7&&p>=15&&(A="6"),f.toNumber()>=1e8&&p>=15&&(A="7"),""!==A&&(O=s.a.createElement("img",{style:{width:"150px"},src:"images/avatars/sello-"+A+".png",alt:"sello level"})),this.setState({image:O})}},{key:"getSponsor",value:async function(){let{owner:e,wallet:t,walletView:a,contract:n}=this.state,s=t;this.props.isView&&(t=a);let i=e,l=document.location.href;if(await n.principal.methods.isUserExists(t).call({from:s})){i=(await n.principal.methods.users(t).call({from:s})).referrer}else if(i=w.get("sponsor"),void 0===i&&(i=e),l.indexOf("?")>0){let e,t=l.split("?")[1].split("&"),a={};for(var r=0,o=t.length;r<o;r++)e=t[r].split("="),a[e[0]]=unescape(decodeURI(e[1]));if(a.ref){e=a.ref.split("#")[0];let t=await n.principal.methods.idToAddress(e).call({from:s});await n.principal.methods.isUserExists(t).call({from:s})&&(i=t,w.set("sponsor",""+i,{maxAge:2592e3}))}}let c=await n.principal.methods.users(i).call({from:s});return this.setState({sponsor:i,idSponsor:new E(c.id)}),i}},{key:"deposit",value:async function(){if(!this.state.metamask.logged)return await this.conectar(),void this.estado();if(this.props.isView)return;let{level:e,balanceUSDT:t,aprovedUSDT:a,contract:n,wallet:s,decimals:i,levelsPrice:l,LAST_LEVEL:r,metamask:o,gasPrice:c}=this.state;e++;let p=s;if(e>r)window.alert("You reached the last level");else if(l[e]>t.toNumber())window.alert("You do not have enough funds in your account");else if(a.toNumber()<=l[e]*10**i)try{S=new E(await n.token.methods.approve(x,new E("100000000").shiftedBy(i).toString(10)).estimateGas({from:p})).toString(10);let e=await n.token.methods.approve(x,new E("100000000").shiftedBy(i).toString(10)).send({gasPrice:c,gas:S});window.alert("Completed transaction: "+e.transactionHash.toString())}catch(d){console.log(d),window.alert("Error approve: "+d.toString())}else{if(await n.principal.methods.isUserExists(s).call({from:p}))try{S=new E(await n.principal.methods.buyNewLevel(e).estimateGas({from:p})).toString(10);let t=await n.principal.methods.buyNewLevel(e).send({gasPrice:c,gas:S});window.alert("Completed transaction: "+t.transactionHash.toString())}catch(d){return console.log(d),void window.alert("Error Buy: "+d.toString())}else try{let e=await this.getSponsor();this.setState({sponsor:e}),S=new E(await n.principal.methods.registrationExt(e,new E(l[1]).shiftedBy(i).toNumber()).estimateGas({from:p})).toString(10);let t=await n.principal.methods.registrationExt(e,new E(l[1]).shiftedBy(i).toNumber()).send({gasPrice:c,gas:S});window.alert("Completed transaction: "+t.transactionHash.toString())}catch(d){if(console.log(d),!(d.toString().indexOf("still be mined")>=0))return void window.alert("Error register: "+d.toString());window.alert("Transaction  is awaiting processing ")}this.estado()}}},{key:"withdraw",value:async function(){if(this.props.isView)return;let{contract:e,wallet:t}=this.state;e.principal.methods.withdraw().send({from:t}).then((function(){alert("Is done")})).catch((function(e){alert("Error: "+e.toString())}))}},{key:"changeToken",value:async function(e){if(this.props.isView)return;const{wallet:t,contract:a}=this.state;prompt("Password to change")&&a.principal.methods.ChangeTokenUSDT(e).send({from:t}).then((function(){alert("change is done")})).catch(console.error)}},{key:"render",value:function(){var e=this;let{wallet:t,walletView:a,id:n,balanceUSDT:i,ganado:l,balanceLost:r,level:o,texto:c,link:p,idSponsor:d,sponsor:m,canastas:u,isOwner:y,team:h,addressToken:b,tokenName:f,image:w,LAST_LEVEL:E}=this.state;this.props.isView&&(t=a);let g=s.a.createElement(s.a.Fragment,null);return y&&!this.props.isView&&(g=s.a.createElement(s.a.Fragment,null,"Change principal token: ",s.a.createElement("br",null),s.a.createElement("button",{onClick:function(){return e.changeToken("0xc2132D05D31c914a87C6611C10748AEb04B58e8F")}},"USDT"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359")}},"USDC"),s.a.createElement("button",{onClick:function(){return e.changeToken("0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063")}},"DAI"))),s.a.createElement("div",{style:{width:"100%",display:"block",marginTop:"100px",padding:"0 1.1rem 0 1.1rem",fontSize:"16px",color:"white",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px",gridAutoRows:"minmax(100px, auto)"}},s.a.createElement("div",{style:{textAlign:"center"}},w),s.a.createElement("div",null,s.a.createElement("table",{className:"table"},s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"PROFIT"),s.a.createElement("td",{style:{textAlign:"right",color:"#009030"}},s.a.createElement("span",{style:{fontWeight:"bold"}},l.dp(2).toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",f))),s.a.createElement("tr",null,s.a.createElement("td",null,"Balance"),s.a.createElement("td",{style:{textAlign:"right"}},i.dp(2).toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",s.a.createElement("strong",null,f))),s.a.createElement("tr",null,s.a.createElement("td",null,"Level"),s.a.createElement("td",{style:{textAlign:"right"}},o,"/",E)),s.a.createElement("tr",null,s.a.createElement("td",null,"Partners"),s.a.createElement("td",{style:{textAlign:"right"}},s.a.createElement("span",{style:{fontWeight:"bold"}},h))),s.a.createElement("tr",null,s.a.createElement("td",null,"LostPay"),s.a.createElement("td",{style:{textAlign:"right",color:"red"}},r.dp(2).toString(10).replace(/\B(?=(\d{3})+(?!\d))/g,",")," ",s.a.createElement("strong",null,f))),s.a.createElement("tr",null,s.a.createElement("td",null,"My ID"),s.a.createElement("td",{style:{textAlign:"right",wordBreak:"break-all"}},s.a.createElement("span",{style:{fontWeight:"bold"}},n.toString(10)))),s.a.createElement("tr",null,s.a.createElement("td",null,"Sponsor ID"),s.a.createElement("td",{style:{textAlign:"right",wordBreak:"break-all"}},s.a.createElement("span",{style:{fontWeight:"bold"}},d.toString(10))))))),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){return e.deposit()},style:{width:"100%",color:"white",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},c)),s.a.createElement("div",null,s.a.createElement("p",{style:{border:"solid white",borderRadius:"5px",padding:"2px",marginBottom:"5px"}},p),s.a.createElement("button",{type:"button",className:"auth-btn btn btn-success btn-sm",onClick:function(){"Loading..."!==p&&(navigator.clipboard.writeText(p),window.alert("link copied!"))},style:{color:"white",width:"100%",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},"Copy referal link ",s.a.createElement("span",null,s.a.createElement("i",{className:"fa fa-clipboard text-white"})))),s.a.createElement("div",null,g),s.a.createElement("div",{className:"contenedor-flex"},u),s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("p",{style:{wordBreak:"break-all"}},s.a.createElement("span",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-users"})," Number Partners on Level"),s.a.createElement("br",null),s.a.createElement("span",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("i",{className:"fa fa-refresh"})," Level Cycle"),s.a.createElement("br",null),s.a.createElement("span",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("span",{style:{color:"#009030"}},this.props.users," ",s.a.createElement("i",{className:"fa fa-users"}))," All participants"),s.a.createElement("br",null),s.a.createElement("span",{color:"transparent",className:"btn-xs float-left py-0",id:"load-notifications-btn",style:{height:"45px",maxHeight:"45px"}},s.a.createElement("span",{style:{color:"#009030"}},this.props.last24," ",s.a.createElement("i",{className:"fa fa-users"})),"  Joined in 24H")),s.a.createElement("hr",{color:"white"}),s.a.createElement("p",null,"My Wallet: ",s.a.createElement("br",null),t),s.a.createElement("p",null,"Sponsor Wallet: ",s.a.createElement("br",null),m),s.a.createElement("p",null,"Token Address: ",s.a.createElement("br",null),s.a.createElement("a",{href:"https://polygonscan.com/address/"+b},b))))}}])}(n.Component);function L(e,t,a){return t=Object(d.a)(t),Object(c.a)(e,Object(p.a)()?Reflect.construct(t,a||[],Object(d.a)(e).constructor):t.apply(e,a))}let C=function(e){function t(){return Object(r.a)(this,t),L(this,t,arguments)}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("section",{id:"home",className:"s-home target-section","data-parallax":"scroll","data-image-src":"../../images/hero-bg.jpg","data-natural-width":"3000","data-natural-height":"2000","data-position-y":"center"},s.a.createElement("div",{className:"overlay"}),s.a.createElement("div",{className:"shadow-overlay"}),s.a.createElement("div",{className:"home-content"},s.a.createElement("div",{className:"row home-content__main"},s.a.createElement("h1",null,"#1 Decentralized USDT Blockchain Ecosystem"),s.a.createElement("div",{className:"home-content__buttons"},s.a.createElement("a",{href:"#view",className:"smoothscroll btn btn--stroke"},"Account Preview"),s.a.createElement("a",{href:"/?backoffice",className:"smoothscroll btn btn--stroke"},"Back Office"))),s.a.createElement("div",{className:"home-content__line"}))),s.a.createElement("section",{id:"about",className:"s-about"},s.a.createElement("div",{className:"row about-stats stats block-1-4 block-m-1-2 block-mob-full"},s.a.createElement("div",{className:"col-six stats__col "},s.a.createElement("div",{className:"stats__count"},this.props.users),s.a.createElement("h5",null,"All participants")),s.a.createElement("div",{className:"col-six stats__col "},s.a.createElement("div",{className:"stats__count"},this.props.last24),s.a.createElement("h5",null,"Joined in 24H"))),s.a.createElement("div",{className:"about__line"})),s.a.createElement("section",{id:"services",className:"s-services"},s.a.createElement("div",{className:"row section-header has-bottom-sep"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2",style:{color:"white"}},"The Next Generation DeFi Ecosystem"))),s.a.createElement("div",{className:"row services-list block-1-2 block-tab-full"},s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-paint-brush"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Immutability"),s.a.createElement("p",null,"Blockchain secures the algorithm, therefore nobody, even the creators or developers, can change, cancel, stop, or alter your transactions."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-group"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Automatic"),s.a.createElement("p",null,"All transactions between the community members are executed directly from one personal wallet to another. TMC smart contract does not store your funds."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-megaphone"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Autonomus"),s.a.createElement("p",null,"The ecosystem is built on the smart contract technology that is completely autonomous, which excludes any human factor. There are not hidden costs or service fees. The smart contract balance is always 0(zero)."))),s.a.createElement("div",{className:"col-block service-item"},s.a.createElement("div",{className:"service-icon"},s.a.createElement("i",{className:"icon-earth"})),s.a.createElement("div",{className:"service-text"},s.a.createElement("h3",{className:"h2"},"Transparent an decentralized"),s.a.createElement("p",null,"The smart contract code is open, and anyone anytime can observe the entire transaction history. There are no managers or admins at the head."))))),s.a.createElement("section",{id:"clients",className:"s-clients"},s.a.createElement("div",{className:"row section-header"},s.a.createElement("div",{className:"col-full"},s.a.createElement("h2",{className:"display-2"},"FREQUENTLY ASKED QUESTIONS"))),s.a.createElement("div",{className:"row clients-testimonials"},s.a.createElement("div",{className:"col-full"},s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"What is THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"TMC is the first USDT marketing matrix in history with immediate transactions distribution from wallet to wallet, built on smart contract from Polygon\u2019s blockchain, which makes it fully decentralized, transparent, secure and unstoppable.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"Do I Need to Withdraw my earnings from THE MONOPOLY CLUB?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"TMC does not retain any funds, Your earnings arrives instantly and directly into your personal wallet directly from your partners. Only you have access to your wallet and no one else can manage your earnings.")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"Who Manages The Platform?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"TMC platform doesn\u2019t have a manager. The smart contract works on the Polygon\u2019s Blockchain. This means that the platform is fully decentralized(it has no leaders or admins).")))),s.a.createElement("div",{className:"testimonials__slide"},s.a.createElement("details",{close:"true",style:{cursor:"pointer"}},s.a.createElement("summary",null,"Can I Join THE MONOPOLY CLUB in My Country?"),s.a.createElement("div",{className:"faq__content"},s.a.createElement("p",null,"Absolutely, TMC is international and you can join from all the countries in the world, you just need a mobile device, tablet or laptop and internet connection.")))))),s.a.createElement("div",{id:"view",className:"row section-header",style:{marginTop:"125px"}},s.a.createElement("div",{className:"col-full",style:{textAlign:"center"}},s.a.createElement("h2",{className:"display-2"},"Account Preview"),s.a.createElement("p",null,"Look up any TMC member account in preview mode."),s.a.createElement("form",{action:"/?",method:"GET"},s.a.createElement("input",{type:"hidden",name:"viewoffice",value:!0}),s.a.createElement("input",{style:{display:"block",marginRight:"auto",marginLeft:"auto",width:"80%",textAlign:"center",backgroundColor:"lightgray",border:"none",borderRadius:"7px"},type:"text",name:"wallet",placeholder:"ID or Wallet"}),s.a.createElement("button",{type:"submit",style:{width:"80%",color:"white",backgroundColor:"#009030",borderRadius:"5px",borderStyle:"none"}},"Preview"))))))}}])}(n.Component);const _=f.rpc,O=f.contract,A=new y.a(_),B=new A.eth.Contract(b,O);var I=function(e){function t(e){var a,n,s,i;return Object(r.a)(this,t),n=this,s=t,i=[e],s=Object(d.a)(s),(a=Object(c.a)(n,Object(p.a)()?Reflect.construct(s,i||[],Object(d.a)(n).constructor):s.apply(n,i))).state={users:"###",last24:"###"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;(async function(){try{const e=await B.methods.lastUserId().call({from:"0x0000000000000000000000000000000000000000"});return(parseInt(e)-1).toString()}catch(e){return console.error("Error al obtener lastUserId:",e),"###"}})().then((function(t){e.setState({users:t})})),async function(){const e=parseInt(await A.eth.getBlockNumber()),t=await A.eth.getBlock(e),a=parseInt(await A.eth.getBlockNumber()),n=await A.eth.getBlock(a-2e4),s=(parseInt(t.timestamp)-parseInt(n.timestamp))/2e4,i=Math.floor(86400/s),l=Math.max(e-i,0);console.log("Consultando eventos desde el bloque ".concat(l," hasta ").concat(e," total de bloques ").concat(e-l));try{return(await B.getPastEvents("Registration",{fromBlock:l,toBlock:e})).length}catch(r){return console.log(r),0}}().then((function(t){e.setState({last24:t})}))}},{key:"render",value:function(){let e="/",t=document.location.href;switch(t.indexOf("/?")>0&&(e=t.split("/?")[1],e=e.split("=")[0],e=e.split("&")[0],e=e.split("#")[0]),e=e.toLowerCase(),e){case"app":case"backoffice":return s.a.createElement(M,this.state);case"wallet":case"view":case"viewoffice":return s.a.createElement(M,Object.assign({isView:!0},this.state));default:return s.a.createElement(C,this.state)}}}])}(n.Component),U=document.getElementById("root");l.a.render(s.a.createElement(I,null),U)}},[[18,1,2]]]);
//# sourceMappingURL=main.e20d355f.chunk.js.map