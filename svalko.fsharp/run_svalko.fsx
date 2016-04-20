#load "svalko_app.fsx"
#r "packages/FAKE/tools/FakeLib.dll"
#r "packages/Suave/lib/net40/Suave.dll"
 
open Suave // always open suave
 

open Fake

Target "Clean" (fun _ ->
    trace "Nothing here right now")
    
Target "Deploy" (fun _ ->
    trace "Nothing here right now")
    
Target "Test" (fun _ ->
    trace "Nothing here right now")
    
Target "Run" (fun _ ->
    trace "Starting Suave server..."
    startWebServer defaultConfig Svalko_app.svalko   
)

Run "Run"