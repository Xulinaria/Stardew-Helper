using System.Xml;
using backend.Models;

namespace backend.Parsers;

public class ParserXml
{
    public List<Room> ParserRooms()
    {
        List <Room> rooms = new List<Room>();
        XmlDocument fileXml = new XmlDocument();
        
        fileXml.Load("C:\\Users\\KingPC\\AppData\\Roaming\\StardewValley\\Saves\\KNIGHT_336590365\\KNIGHT_336590365");

        XmlNodeList bundleDataNode = fileXml.GetElementsByTagName("bundleData");
        XmlNodeList bundlesNode = fileXml.GetElementsByTagName("bundles");
        
        List<ItemsCompleat> itemsCompleats = ParserItemsCompleats(bundlesNode);
        
        foreach (XmlNode bundleNode in bundleDataNode)
        {
            foreach (XmlNode itemNode in bundleNode)
            {
                string keyString = itemNode.SelectSingleNode("key/string").InnerText;
                string valueString = itemNode.SelectSingleNode("value/string").InnerText;

                string nameRoom = ExtractNameRoom(keyString);
                string nameBundle = ExtractNameBundle(valueString);
                int idBundle = ExtractIdBundle(keyString);
                List<Item> items = ExtractItem(valueString, idBundle, itemsCompleats);

                Room room = rooms.Find(r => r.GetName() == nameRoom);
                if (room == null)
                {
                    room = new Room(nameRoom);
                    rooms.Add(room);
                }
                
                Bundle bundle = new Bundle(idBundle, nameBundle, items);
                room.AddBundle(bundle);
            }
        }
        
        return rooms;
    }

    private string ExtractNameRoom(string keyString)
    {
        return keyString.Split("/")[0];
    }

    private string ExtractNameBundle(string valueString)
    {
        return valueString.Split("/")[0];
    }

    private int ExtractIdBundle(string keyString)
    {
        return Convert.ToInt32(keyString.Split("/")[1]);
    }

    private List<Item> ExtractItem(string valueString, int idBundle, List<ItemsCompleat> itemsCompleats)
    {
        List<Item> items = new List<Item>();

        string stringItems = valueString.Split("/")[2];
        string[] numberItem = stringItems.Split(" ");

        ItemsCompleat itemsCompleat = itemsCompleats.Find(i => i.GetId() == idBundle);

        bool[] compleat = itemsCompleat.GetCompleat();
        
        for (int i = 0; i < numberItem.Length; i += 3)
        {
            int idItem = Convert.ToInt32(numberItem[i]);
            int quantityItem = Convert.ToInt32(numberItem[i + 1]);
            int quality = Convert.ToInt32(numberItem[i + 2]);
            
            Item item = new Item(idItem, quantityItem, quality, compleat[i/3]);
            items.Add(item);
        }
        
        return items;
    }

    private List<ItemsCompleat> ParserItemsCompleats(XmlNodeList bundlesNode)   
    {
        List<ItemsCompleat> itemsCompleats = new List<ItemsCompleat>();

        foreach (XmlNode bundleNode in bundlesNode)
        {
            foreach (XmlNode itemNode in bundleNode)
            {
                int idBundle = Convert.ToInt32(itemNode.SelectSingleNode("key/int").InnerText);

                XmlNode valueArray = itemNode.SelectSingleNode("value/ArrayOfBoolean");
                if (valueArray != null)
                {
                    int itemCount = valueArray.ChildNodes.Count;
                    bool[] complete = new bool[itemCount];
                    
                    for (int i = 0; i < itemCount; i++)
                    {
                        XmlNode booleanNode = valueArray.ChildNodes[i];
                        bool isComplete = booleanNode.InnerText == "true";
                        complete[i] = isComplete;
                    }
                    
                    ItemsCompleat itemsCompleat = new ItemsCompleat(idBundle, complete);
                    itemsCompleats.Add(itemsCompleat);
                }
            }
        }
        return itemsCompleats;
    }
}