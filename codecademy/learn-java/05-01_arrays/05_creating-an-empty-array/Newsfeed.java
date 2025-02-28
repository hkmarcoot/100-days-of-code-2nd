public class Newsfeed {
    String[] topics = {"Opinion", "Tech", "Science", "Health"};
    int[] views = {0, 0, 0, 0};
    String[] favoriteArticles;
    
    public Newsfeed(){
      // Initialize favoriteArticles here:
      favoriteArticles = new String[10];
    }
    
    public void setFavoriteArticle(int favoriteIndex, String newArticle){
      // Add newArticle to favoriteArticles:
      favoriteArticles[favoriteIndex] = newArticle;
    }
  }
