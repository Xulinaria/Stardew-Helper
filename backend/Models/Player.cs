namespace backend.Models;

public class Player
{
    public string Name { get; set; }
    public List<int> Experience { get; set; }
    
    
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
}