using System;

namespace BiblioInheritance
{
  class Video : Resource
  {
    public string Director
    { get; private set; }

    public int RunTime
    { get; private set; }

    public string MediaType
    { get; private set; }
    
    public Video(string title, string category, string director, int runTime, string mediaType) : base(title, category){
      Director = director;
      RunTime = runTime;
      MediaType = mediaType;
    }

    public override void GetInfo(){
      Console.WriteLine($"Title: {Title}\nCategory: {Category}\nStatus: {Status}\nDirector: {Director}\nRunTime: {RunTime}\nMediaType: {MediaType}");
    }

    public override void UpdateStatus(){
      if(MediaType == "On-Demand"){
        MediaType = "DVD";
      } else if (MediaType == "DVD"){
        MediaType = "On-Demand";
      }
    }
  }

}
