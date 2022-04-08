﻿using Interfaces.DTO;
using Interfaces.Interface;

namespace Logic.Models
{
    public class Werknemer 
    {
        private IWerknemer _iWerknemer;
        public int WerknemerID { get; set; }
        public int NummerPasje { get; set; }
        public string Naam { get; set; }
        public int TelefoonNummer { get; set; }

        public Werknemer(IWerknemer iWerknemer)
        {
            _iWerknemer = iWerknemer;
        }

        public Werknemer(WerknemerDTO dto, IWerknemer iWerknemer)
        {
            WerknemerID = dto.WerknemerID;
            NummerPasje = dto.NummerPasje;
            TelefoonNummer = dto.TelefoonNummer;
            Naam = dto.Naam;
            _iWerknemer = iWerknemer;
        }

        public Werknemer(int werknemerID, string naam, int nummerPasje, int telefoonNummer, IWerknemer iWerknemer)
        {            
            WerknemerID = werknemerID;
            Naam = naam;
            NummerPasje = nummerPasje;
            TelefoonNummer = telefoonNummer;
            _iWerknemer = iWerknemer;
        }

        public Werknemer(string naam, int nummerPasje, int telefoonNummer, IWerknemer iWerknemer)
        {            
            Naam = naam;
            NummerPasje = nummerPasje;
            TelefoonNummer = telefoonNummer;
            _iWerknemer = iWerknemer;
        }
        public void AddWerknemer()
        {
            _iWerknemer.AddNewWerknemer(this.WerknemerToDTO());
        }

        public void UpdateWerknemer(int oldWerknemerID)
        {
            _iWerknemer.ChangeWerknemerData(this.WerknemerToDTO(), oldWerknemerID);
        }

        public void DeleteWerknemer()
        {
            _iWerknemer.DeleteWerknemer(this.WerknemerToDTO());
        }

        public WerknemerDTO WerknemerToDTO()
        {
            WerknemerDTO werknemerDTO = new WerknemerDTO();
            werknemerDTO.WerknemerID = WerknemerID;
            werknemerDTO.Naam = Naam;
            werknemerDTO.NummerPasje = NummerPasje;
            werknemerDTO.TelefoonNummer = TelefoonNummer;
            return werknemerDTO;
        }
    }
}
