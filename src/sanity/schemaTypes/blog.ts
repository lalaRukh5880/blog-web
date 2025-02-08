export default {
    name:"blog",
    type :"document",
    title :"Blog",
    fields:[
        {
            name:"title",
            type :"string",
            title:"Title of Blog article",


        },{
            name:"slug",
            type:"slug",
            title:"Slug of Blog article",
            options :{
                 source:"title",
            }

        },{
            name:"titleImage",
            type:"image",
            title:"Title Image",
        },{
            name:"description",
            type:"text",
            title:"Description",
        },
        {
            name:"content",
            type:"array",
            title:"Content of Blog article",
            of:[
                {
                    type:"block",
                },
            ],
        }
    
    ]
}