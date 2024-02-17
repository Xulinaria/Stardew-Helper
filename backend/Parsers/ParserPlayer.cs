using System.Xml;
using backend.Models;
using Newtonsoft.Json;

namespace backend.Parsers;

public class ParserPlayer
{
    public Player MainPlayer()
    {
        XmlDocument fileXml = new XmlDocument();
        fileXml.Load("C:\\Users\\KingPC\\AppData\\Roaming\\StardewValley\\Saves\\Цурбер_300739156\\Цурбер_300739156");
        
        XmlNodeList mainPlayerNode = fileXml.GetElementsByTagName("player");

        Player player = new Player();
        
        foreach (XmlNode playerNode in mainPlayerNode)
        {
            string namePlayer = playerNode.SelectSingleNode("name").InnerText;
            
            List<int> pointsProfession = ExtractProfessions(playerNode.SelectSingleNode("experiencePoints"));
            List<Cooking> cooking = ExtractCooking(playerNode.SelectSingleNode("cookingRecipes"));
            List<Crafting> crafting = ExtractCrafting(playerNode.SelectSingleNode("craftingRecipes"));
            List<Fish> fishes = ExtractFish(playerNode.SelectSingleNode("fishCaught"));
            
            player.setName(namePlayer);
            player.setExperience(pointsProfession);
            player.setCooking(cooking);
            player.setCrafting(crafting);
            player.setFishes(fishes);
        }
        
        return player;
    }

    private List<int> ExtractProfessions(XmlNode experiencePointsNode)
    {
        //на будующее
        string[] professions = ["farming", "mining", "foraging", "fishing", "combat", "luck"];
        int[] professionsLvl = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];
        
        List<int> pointsProfession = new List<int>();
        
        foreach (XmlNode experiencePoint in experiencePointsNode)
        {
            int points = Convert.ToInt32(experiencePoint.InnerText);
            pointsProfession.Add(points);
        }
        
        return pointsProfession;
    }

    private List<Cooking> ExtractCooking(XmlNode cookingRecipesNode)
    {
        string fileJson = "data\\cooking.json";
        string jsonFromFile = File.ReadAllText(fileJson);
        List<Cooking> initialCookings = JsonConvert.DeserializeObject<List<Cooking>>(jsonFromFile);
        
        List<Cooking> xmlCookings = new List<Cooking>();

        foreach (XmlNode cookingRecipe in cookingRecipesNode)
        {
            string keyString = cookingRecipe.SelectSingleNode("key/string").InnerText;
            int valueInt = int.Parse(cookingRecipe.SelectSingleNode("value/int").InnerText);

            Cooking cooking = new Cooking();
            cooking.xmlCooking(keyString,valueInt);
            
            xmlCookings.Add(cooking);
        }
        
        foreach (var cook in initialCookings)
        {
            var xmlCooking = xmlCookings.Find(x => x.Name == cook.Name);
            if (xmlCooking != null)
                cook.Quantity = xmlCooking.Quantity;
            else cook.Quantity = -1;
        }
        
        return initialCookings;
    }
    
    private List<Crafting> ExtractCrafting(XmlNode craftingRecipesNode)
    {
        List<Crafting> craftings = new List<Crafting>();
        
        foreach (XmlNode craftingRecipe in craftingRecipesNode)
        {
            string keyString = craftingRecipe.SelectSingleNode("key/string").InnerText;
            int valueInt = int.Parse(craftingRecipe.SelectSingleNode("value/int").InnerText);

            Crafting crafting = new Crafting(keyString, valueInt);
            
            craftings.Add(crafting);
        }
        
        return craftings;
    }
    

    private List<Fish> ExtractFish(XmlNode fishCaughtNode)
    {
        string fileJson = "data\\fishing.json";
        string jsonFromFile = File.ReadAllText(fileJson);
        List<Fish> initialFishings = JsonConvert.DeserializeObject<List<Fish>>(jsonFromFile);
        
        List<Fish> xmlFishes = new List<Fish>();

        foreach (XmlNode fishCaught in fishCaughtNode)
        {
            int id = int.Parse(fishCaught.SelectSingleNode("key/int").InnerText);
            int quantity = int.Parse(fishCaught.SelectSingleNode("value/ArrayOfInt/int").InnerText);
            int maxLength = int.Parse(fishCaught.SelectSingleNode("value/ArrayOfInt/int[2]").InnerText);

            Fish fish = new Fish();
            fish.xmlFish(id, quantity, maxLength);
            
            xmlFishes.Add(fish);
        }
        
        foreach (var fish in initialFishings)
        {
            var xmlFish = xmlFishes.Find(x => x.Id == fish.Id);
            if (xmlFish != null)
            {
                fish.Quantity = xmlFish.Quantity;
                fish.MaxLength = xmlFish.MaxLength;
            }
            else fish.Quantity = -1;
        }
        
        return initialFishings;
    }
}