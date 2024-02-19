namespace backend.Models;

public class Cooking
{
    public int Id { get; set; }
    public string Name { get; set; } 
    public int Quantity { get; set; }
    public string Description { get; set; }

    public void xmlCooking( string name, int quantity)
    {
        Name = name;
        Quantity = quantity;
    }
}