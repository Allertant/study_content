const express = require("express");
const expressip = require("express-ip");
const axios = require("axios")
const fs = require("fs")
const app = express();
app.use(expressip().getIpInfoMiddleware)
app.get("/",(req,res)=>{
	let ip = req.ipInfo.ip.substring(7)
	let address = "" ;
	axios.get("https://ip.taobao.com/outGetIpInfo?ip="+ip+"&accessKey=alibaba-inc")
		.then(value=>{
			let country = value.data.data.country;
			let region = value.data.data.region;
			let city = value.data.data.city;
			let isp = value.data.data.isp;
			if(country) address+=(country+" ")
			if(region) address+=(region+" ")
			if(city) address+=(city+" ")
			if(isp) address+=isp

			let date = new Date();
			let context = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+" "
						+ date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
			new Promise((resolve, reject) => {
				fs.appendFile('./document.txt',context+" "+ip+" "+address+"\n",(err,data)=>{
					if(err) reject(err)
					resolve(data)
				})
			})
			.then(()=>{
				
			},()=>{
				
			})
		},()=>{
			address="未知"
		}).then(
			()=>{
				res.send({
					msg:"helloworld",
					ip:ip,
					address:address
				})
			}
		)
	
})
app.listen(3000,()=>{console.log("server is running!")})
