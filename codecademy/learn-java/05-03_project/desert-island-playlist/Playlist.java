import java.util.Arrays;
import java.util.ArrayList;

class Playlist {
  public static void main(String[] args) {
    String[] favoriteSongs = {"Adam - Song 1", "Betty - Song 2", "Catty - Song 3", "Duo - Song 4", "Elf - Song 5", "Fire - Song 6", "Gla - Song 7", "Helen - Song 8", "Iria - Song 9", "Jera - Song 10"};
    System.out.println(favoriteSongs[0]);
    System.out.println(favoriteSongs[1]);
    System.out.println(favoriteSongs[2]);
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();
    desertIslandPlaylist.add("Kily - Song 11");
    desertIslandPlaylist.add("Leo - Song 12");
    desertIslandPlaylist.add("Mar - Song 13");
    desertIslandPlaylist.add("Noom - Song 14");
    desertIslandPlaylist.add("Owly - Song 15");
    System.out.println(desertIslandPlaylist);
    desertIslandPlaylist.addAll(Arrays.asList(favoriteSongs));
    System.out.println(desertIslandPlaylist.size());
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    desertIslandPlaylist.remove(3);
    System.out.println(desertIslandPlaylist);
    int songA = desertIslandPlaylist.indexOf("Mar - Song 13");
    int songB = desertIslandPlaylist.indexOf("Jera - Song 10");
    String tempA = "Mar - Song 13";
    String tempB = "Jera - Song 10";
    desertIslandPlaylist.set(songA, tempB);
    desertIslandPlaylist.set(songB, tempA);
    System.out.println(desertIslandPlaylist);
  }
}
