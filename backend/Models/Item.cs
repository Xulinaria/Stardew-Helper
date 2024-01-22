namespace backend.Models;

public class Item(int id, int quantity, int quality, bool compleat)
{
    public int Id { get; } = id;
    public int Quantity { get; } = quantity;
    public int Quality { get; } = quality;
    public bool Compleat { get; } = compleat;
}