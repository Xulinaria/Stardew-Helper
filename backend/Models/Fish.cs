namespace backend.Models;

public class Fish(int id, int quantity, int maxLength)
{
    public int Id { get; } = id;
    public int Quantity { get; } = quantity;
    public int MaxLength { get; } = maxLength;
}