### Static Page Creation : 
await fetch("",{
    next :{revalidate:3000}
})


### Dynamic Page Creation : 
await fetch("",{
   cache : "no-store"
})
