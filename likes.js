function likes(names){
    
    switch(names.length){
        case 0:
         return `no one likes this`
        case 1:
         return `${names[0]} likes this`
         case 2:
         return `${names[0]} and ${names[1]} like this`
         case 3:
         return `${names[0]}, ${names[1]} and ${names[2]} like this`
        default:
        const rest = names.slice(2)
      return `${names[0]}, ${names[1]} and ${rest.length} others like this`
    }
}
