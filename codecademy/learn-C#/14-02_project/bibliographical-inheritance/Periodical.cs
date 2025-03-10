using System;

namespace BiblioInheritance
{
  class Periodical : Resource
  {
    public string Period;

    public Periodical(string title, string category, string period) : base(title, category){
      Period = period;
    }

    public override void UpdateStatus(){
      if(Status == "Out" || Status == "In-use"){
        Status = "Available";
      } else if(Status == "Available"){
        Status = "In-use";
      }
    }

  }
}