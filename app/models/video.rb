class Video < ApplicationRecord
    has_one_attached :file

    validates :title, presence: true
    validates :file, attached: true

end
