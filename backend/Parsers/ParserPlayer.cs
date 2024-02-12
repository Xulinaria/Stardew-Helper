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
        string[] professions = ["farming", "mining", "foraging", "fishing", "combat", "luck"];
        int[] professionsLvl = [100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000];
        
        foreach (XmlNode playerNode in mainPlayerNode)
        {
            string namePlayer = playerNode.SelectSingleNode("name").InnerText;

            XmlNode experiencePointsNode = playerNode.SelectSingleNode("experiencePoints");
            List<int> pointsProfession = new List<int>();
            foreach (XmlNode experiencePoint in experiencePointsNode)
            {
                int points = Convert.ToInt32(experiencePoint.InnerText);
                pointsProfession.Add(points);
            }
            
            player.setName(namePlayer);
            player.setExperience(pointsProfession);
        }

         
        
        return player;
    }
}