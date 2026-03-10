from uuid import uuid4


def generate_random_uuid() -> str:
	return str(uuid4())


if __name__ == "__main__":
	print(generate_random_uuid())
