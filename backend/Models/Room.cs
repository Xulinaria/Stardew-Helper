namespace backend.Models;

public class Room(string name)
{
    public string Name { get; } = name;
    public List<Bundle> Bundles{ get; } = [];
    
    public void AddBundle(Bundle bundle)
    {
        Bundles.Add(bundle);
    }

    public List<Bundle> GetBundles()
    {
        return Bundles;
    }
    
    public string GetName()
    {
        return Name;
    }
}