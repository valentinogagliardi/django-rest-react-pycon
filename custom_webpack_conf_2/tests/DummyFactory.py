from ..models import Link, Tag


class DummyFactory:

    def __init__(self):
        self.link = Link.objects.create(
            title="Some title",
            url="Some url"
        )
        self.tags = [Tag.objects.create(name=tag)
                     for tag in ['django', 'python']]
        [self.link.tags.add(tag) for tag in self.tags]