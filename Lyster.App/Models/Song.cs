namespace Lyster.App.Models;

/// <summary>
/// Mock song model for UI display (Phase 1 - no services)
/// </summary>
public class Song
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public string Album { get; set; } = string.Empty;
    public string? AlbumArtUrl { get; set; }
    public TimeSpan Duration { get; set; }
    public int Year { get; set; }
    public string Genre { get; set; } = string.Empty;
    public bool IsFavorite { get; set; }
    public bool IsPlaying { get; set; }

    /// <summary>
    /// Gets formatted duration string (e.g., "3:45")
    /// </summary>
    public string FormattedDuration =>
        Duration.Hours > 0
            ? $"{Duration.Hours}:{Duration.Minutes:D2}:{Duration.Seconds:D2}"
            : $"{Duration.Minutes}:{Duration.Seconds:D2}";

    /// <summary>
    /// Mock data for UI testing
    /// </summary>
    public static List<Song> GetMockSongs() => new()
    {
        new Song
        {
            Id = 1,
            Title = "Ocean Waves",
            Artist = "The Tidal Collective",
            Album = "Deep Blue",
            AlbumArtUrl = "/assets/album1.jpg",
            Duration = TimeSpan.FromSeconds(245),
            Year = 2023,
            Genre = "Electronic",
            IsFavorite = true
        },
        new Song
        {
            Id = 2,
            Title = "Midnight Tide",
            Artist = "Luna Sound",
            Album = "Nocturnal",
            AlbumArtUrl = "/assets/album2.jpg",
            Duration = TimeSpan.FromSeconds(198),
            Year = 2024,
            Genre = "Ambient"
        },
        new Song
        {
            Id = 3,
            Title = "Coral Dreams",
            Artist = "Aquatic Beats",
            Album = "Reef Life",
            AlbumArtUrl = "/assets/album3.jpg",
            Duration = TimeSpan.FromSeconds(312),
            Year = 2023,
            Genre = "Chillwave"
        },
        new Song
        {
            Id = 4,
            Title = "Rising Current",
            Artist = "The Tidal Collective",
            Album = "Deep Blue",
            AlbumArtUrl = "/assets/album1.jpg",
            Duration = TimeSpan.FromSeconds(267),
            Year = 2023,
            Genre = "Electronic",
            IsFavorite = true
        },
        new Song
        {
            Id = 5,
            Title = "Shoreline",
            Artist = "Coast to Coast",
            Album = "Beaches",
            AlbumArtUrl = "/assets/album4.jpg",
            Duration = TimeSpan.FromSeconds(221),
            Year = 2024,
            Genre = "Indie Pop"
        },
        new Song
        {
            Id = 6,
            Title = "Underwater Symphony",
            Artist = "Aquatic Beats",
            Album = "Reef Life",
            AlbumArtUrl = "/assets/album3.jpg",
            Duration = TimeSpan.FromSeconds(289),
            Year = 2023,
            Genre = "Chillwave",
            IsFavorite = true
        },
        new Song
        {
            Id = 7,
            Title = "Lunar Reflection",
            Artist = "Luna Sound",
            Album = "Nocturnal",
            AlbumArtUrl = "/assets/album2.jpg",
            Duration = TimeSpan.FromSeconds(234),
            Year = 2024,
            Genre = "Ambient"
        },
        new Song
        {
            Id = 8,
            Title = "Tidal Force",
            Artist = "The Tidal Collective",
            Album = "Deep Blue",
            AlbumArtUrl = "/assets/album1.jpg",
            Duration = TimeSpan.FromSeconds(278),
            Year = 2023,
            Genre = "Electronic"
        },
        new Song
        {
            Id = 9,
            Title = "Sunset Beach",
            Artist = "Coast to Coast",
            Album = "Beaches",
            AlbumArtUrl = "/assets/album4.jpg",
            Duration = TimeSpan.FromSeconds(195),
            Year = 2024,
            Genre = "Indie Pop",
            IsFavorite = true
        },
        new Song
        {
            Id = 10,
            Title = "Deep Waters",
            Artist = "Aquatic Beats",
            Album = "Reef Life",
            AlbumArtUrl = "/assets/album3.jpg",
            Duration = TimeSpan.FromSeconds(301),
            Year = 2023,
            Genre = "Chillwave"
        }
    };
}
