using System.Xml;
using backend.Models;

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
        List<Cooking> cookings = new List<Cooking>();

        foreach (XmlNode cookingRecipe in cookingRecipesNode)
        {
            string keyString = cookingRecipe.SelectSingleNode("key/string").InnerText;
            int valueInt = int.Parse(cookingRecipe.SelectSingleNode("value/int").InnerText);

            Cooking cooking = new Cooking(keyString, valueInt);
            
            cookings.Add(cooking);
        }
        
        return cookings;
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
        List<Fish> fishes = new List<Fish>();

        foreach (XmlNode fishCaught in fishCaughtNode)
        {
            int id = int.Parse(fishCaught.SelectSingleNode("key/int").InnerText);
            int quantity = int.Parse(fishCaught.SelectSingleNode("value/ArrayOfInt/int").InnerText);
            int maxLength = int.Parse(fishCaught.SelectSingleNode("value/ArrayOfInt/int[2]").InnerText);

            Fish fish = new Fish(id, quantity, maxLength);
            
            fishes.Add(fish);
        }
        
        return fishes;
    }
}