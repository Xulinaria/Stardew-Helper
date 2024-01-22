namespace backend.Models;

public class ItemsCompleat(int id, bool[] compleat)
{
    public int Id { get; } = id;
    public bool[] Compleat { get; } = compleat;

    public int GetId()
    {
        return Id;
    }

    public bool[] GetCompleat()
    {
        return Compleat;
    }
}