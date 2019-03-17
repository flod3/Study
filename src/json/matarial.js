import React from 'react'
export const MatarialDatas = [
    {
        key : "1",
        image : "iron.jpg",
        name : "钢铁",
        weight : "100kg",
        address : "河北-唐山"
    },
    {
        key : "2",
        image : "coal.jpg",
        name : "煤炭",
        weight : "100kg",
        address : "山西-大同"
    },
    {
        key : "3",
        image : "fish.jpg",
        name : "金枪鱼",
        weight : "100kg",
        address : "海南-海口"
    },
    {
        key : "4",
        image : "sulfate.jpg",
        name : "硫酸钾",
        weight : "100kg",
        address : "新疆-罗布泊"
    },
    {
        key : "5",
        image : "milk.jpg",
        name : "牛奶",
        weight : "100kg",
        address : "内蒙古-呼和浩特"
    }

]

export const Columns = [
    {
        title : "物料名称",
        dataIndex : "name",
        key : "name"
    },
    {
        title : "图片",
        dataIndex : "image",
        key : "image",
        render : image =>(
           <div>
             <img src={"http://localhost:3000/images/"+image} style={{width:'100px',height:'100px'}}/>  
           </div>            
        )
    },
    {
        title : "重量",
        dataIndex : "weight",
        key : "weight"
    },
    {
        title : "地址",
        dataIndex : "address",
        key : "address"
    }
]