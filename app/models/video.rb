class Video < ApplicationRecord
    has_one_attached :file

    validates :title, presence: true
    validates :file, attached: true, content_type: ['video/mp4', 'video/mkv', 'video/webm']

end
