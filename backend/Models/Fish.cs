namespace backend.Models;

public class Fish()
{
    public int Id { get; set; } 
    public string Name { get; set; } 
    public int Quantity { get; set; } 
    public int MaxLength { get; set; } 
    public string Description { get; set; }

    public void xmlFish(int id, int quantity, int maxLength)
    {
        Id = id;
        Quantity = quantity;
        MaxLength = maxLength;
    }
}