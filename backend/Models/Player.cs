namespace backend.Models;

public class Player
{
    public string Name { get; set; }
    public List<int> Experience { get; set; }
    public List<Cooking> Cooking { get; set; }
    public List<Crafting> Crafting { get; set; }
    public List<Fish> Fishes { get; set; }
    
    public Player()
    {
    }

    public void setName(string name)
    {
        Name = name;
    }

    public void setExperience(List<int> experience)
    {
        Experience = experience;
    }

    public void setCooking(List<Cooking> cooking)
    {
        Cooking = cooking;
    }

    public void setCrafting(List<Crafting> crafting)
    {
        Crafting = crafting;
    }

    public void setFishes(List<Fish> fishes)
    {
        Fishes = fishes;
    }
}