open System
open System.IO

let paket_path = Path.Combine(__SOURCE_DIRECTORY__, "paket")
if not(Directory.Exists paket_path) then
    let _ = Directory.CreateDirectory paket_path
    Console.WriteLine ("Paket directory has been created: " + paket_path)

Environment.CurrentDirectory <- paket_path

match (File.Exists "paket.exe") with
| false ->
    let url = "http://fsprojects.github.io/Paket/stable"
    use wc = new Net.WebClient()
    let tmp = Path.GetTempFileName()
    let stable = wc.DownloadString(url)
    wc.DownloadFile(stable, tmp)
    File.Move(tmp, Path.GetFileName stable)
    Console.WriteLine "Paket has been downloaded!"
| true ->
    Console.WriteLine "Paket alredy here, going on..."
    
Console.WriteLine "Resolving dependencies"    
#r "paket/paket.exe"
open Paket

Environment.CurrentDirectory <- __SOURCE_DIRECTORY__
match (File.Exists "paket.dependencies") with
| false ->
    let f = File.Create "paket.dependencies"
    f.Close()
    Console.WriteLine "paket.dependencies was not found - created empty one"
| true -> Console.WriteLine "paket.dependencies has been found"
    
let dependencies = Dependencies.Locate(__SOURCE_DIRECTORY__)
dependencies.Add "Suave"
dependencies.Add "FAKE"
Console.WriteLine "Dependencies has been resolved"

let _ = Console.ReadLine()
Console.WriteLine "The end"