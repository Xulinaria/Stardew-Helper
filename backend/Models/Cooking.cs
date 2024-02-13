namespace backend.Models;

public class Cooking(string name, int quantity)
{
    public string Name { get; } = name;
    public int Quantity { get; } = quantity;
}