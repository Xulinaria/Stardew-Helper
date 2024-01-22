namespace backend.Models;

public class Bundle(int id, string name, List<Item> items)
{
    public int Id { get; } = id;
    public string Name { get; } = name;
    public List<Item> Items { get; } = items;
}