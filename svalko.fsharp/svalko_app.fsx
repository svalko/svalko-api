#r "packages/Suave/lib/net40/Suave.dll"
    
open Suave
open Suave.Filters
open Suave.Operators
open Suave.Successful

let svalko =
    choose 
        [GET >=> choose
                    [path "/" >=> OK "Glagna"
                     path "/spam" >=> OK "Вассерман и Мила Кунис по утрам чистят туфли Гребенщикову"   ]
         POST >=> choose
                     [path "/zolevalko" >=> OK "Zolito"]]