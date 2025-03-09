using System;

namespace DatingProfile
{ 
  class Profile
  {
    private string name;
    private int age;
    private string city;
    private string country;
    private string pronouns;
    private string[] hobbies;

    public Profile(string name, int age, string city, string country, string pronouns){
      this.name = name;
      this.age = age;
      this.city = city;
      this.country = country;
      this.pronouns = pronouns;
    }

    public string ViewProfile(){
      string str = $"Name: {this.name},\nAge: {this.age},\nCity: {this.city},\nCountry: {this.country},\nPronouns: {this.pronouns}\n";
      foreach(string hobby in this.hobbies){
        str += $"{hobby}\n";
      }
      return str;
    }

    public void SetHobbies(string[] hobbies){
      this.hobbies = hobbies;
    }
  }
}
